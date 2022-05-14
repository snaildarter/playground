/*************************************************************************
    > File Name: t151.c
    > Author:
    > Mail:
    > Created Time: 六  4/30 19:41:30 2022
 ************************************************************************/

#include <stdio.h>

int res(char x, char y) {
  // 0 1 2
  printf("x: %c, y:%c\n", x, y);
  if (x == y) {
    return 2;
  }
  if ((x == 'Y' && y == 'H') || (x == 'H' && y == 'O') ||
      (x == 'O' && y == 'Y')) {
    return 1;
  }
  return 0;
}

int main() {
  char ml, mr, ll, lr;
  int res1;

  scanf("%s%s", &ml, &mr);
  scanf("%s%s", &ll, &lr);

  printf("%c, %c, %c, %c\n", ml, mr, ll, lr);
  res1 = res(ml, ll);
  if (res1 == 1) {
    if (res(ml, lr)) {
      printf("MING\n");
    }

    if (res(mr, lr) == 1) {
      printf("MING\n");
    } else {
      printf("123LIHUA\n");
    }
  } else if (res1 == 2) {
    if (res(mr, lr) == 1) {
      printf("MING\n");
    } else if (res(mr, lr) == 0) {
      printf("369LIHUA\n");
    } else if (res(mr, lr) == 2) {
      printf("TIE\n");
    }
  } else {
    if (res(mr, ll) != 1) {
      printf("456LIHUA\n");
    }

    if (res(mr, lr)) {
      printf("MING\n");
    } else {
      printf("789LIHUA\n");
    }
  }

  return 0;
}
