#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

static int hexval(char c) {
  if (c >= '0' && c <= '9') return c - '0';
  if (c >= 'A' && c <= 'F') return 10 + c - 'A';
  if (c >= 'a' && c <= 'f') return 10 + c - 'a';
  return 0;
}

static void urldecode(char *s) {
  char *dst = s;
  char *src = s;
  while (*src) {
    if (*src == '+') {
      *dst++ = ' ';
      src++;
    } else if (*src == '%' && isxdigit((unsigned char)src[1]) && isxdigit((unsigned char)src[2])) {
      *dst++ = (char)(hexval(src[1]) * 16 + hexval(src[2]));
      src += 3;
    } else {
      *dst++ = *src++;
    }
  }
  *dst = '\0';
}

/* fallback strdup for portability */
static char *my_strdup(const char *s) {
  if (!s) return NULL;
  size_t n = strlen(s) + 1;
  char *d = malloc(n);
  if (d) memcpy(d, s, n);
  return d;
}

int main(void) {
  const char *method = getenv("REQUEST_METHOD");
  if (!method || strcmp(method, "POST") != 0) {
    printf("Content-Type: text/html\r\n\r\n");
    printf("<!doctype html><html><body><h1>Use POST</h1></body></html>");
    return 0;
  }

  char *cl = getenv("CONTENT_LENGTH");
  int len = cl ? atoi(cl) : 0;
  if (len < 0) len = 0;
  /* optional safety limit (adjust as needed) */
  if (len > 10000) len = 10000;

  char *body = malloc(len + 1);
  if (!body) return 1;
  if (len > 0) {
    if (fread(body, 1, len, stdin) != (size_t)len) {
      free(body);
      return 1;
    }
  }
  body[len] = '\0';

  char *food = NULL, *side = NULL, *drink = NULL, *name = NULL;
  char *pair = NULL;
  char *saveptr = NULL;
  for (pair = strtok_r(body, "&", &saveptr); pair; pair = strtok_r(NULL, "&", &saveptr)) {
    char *eq = strchr(pair, '=');
    if (!eq) continue;
    *eq = '\0';
    char *k = pair;
    char *v = eq + 1;
    urldecode(k);
    urldecode(v);
    if (strcmp(k, "food") == 0) { free(food); food = my_strdup(v); }
    else if (strcmp(k, "side") == 0) { free(side); side = my_strdup(v); }
    else if (strcmp(k, "drink") == 0) { free(drink); drink = my_strdup(v); }
    else if (strcmp(k, "name") == 0) { free(name); name = my_strdup(v); }
  }

  printf("Content-Type: text/html\r\n\r\n");
  printf("<!doctype html><html><head><meta charset=\"utf-8\"><title>Order received</title></head><body>");
  printf("<h1>Order received</h1>");
  printf("<p><strong>Name:</strong> %s</p>", name && *name ? name : "(not provided)");
  printf("<p><strong>Meal:</strong> %s</p>", food && *food ? food : "(none)");
  printf("<p><strong>Side:</strong> %s</p>", side && *side ? side : "(none)");
  printf("<p><strong>Drink:</strong> %s</p>", drink && *drink ? drink : "(none)");
  printf("<p><a href=\"/homePage.html\">Back</a></p>");
  printf("</body></html>");

  free(body);
  free(food);
  free(side);
  free(drink);
  free(name);
  return 0;
}

