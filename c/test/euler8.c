/*************************************************************************
        > File Name: euler8.c
        > Author:
        > Mail:
        > Created Time: 六  5/14 00:24:26 2022
 ************************************************************************/

#include <stdio.h>

int main() {
  char str[1005];
  scanf("%s", str);
  long long now = 1, max = 0, cnt = 0;
  for (int i = 0; i < 1000; i++) {
    if (i < 13) {
      now *= str[i] - '0';
    } else {
      if (str[i] == '0') {
        cnt++;
      } else {
        now *= str[i] - '0';
      }
      if (str[i - 13] == '0') {
        cnt--;
      } else {
        now /= str[i - 13] - '0';
      }
    }
    if (cnt == 0 && max < now) {
      max = now;
    }
  }

  printf("%lld\n", max);
  return 0;
}