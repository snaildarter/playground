/*************************************************************************
    > File Name: t151.c
    > Author:
    > Mail:
    > Created Time: 六  4/30 19:41:30 2022
 ************************************************************************/

#include <stdio.h>

int res(char x, char y) {
  // 0 1 2
  int res;
  if (x == y) {
    res = 2;
  } else {
    if (x == 'Y') {
      res = y == 'H' ? 1 : 0;
    }

    if (x == 'O') {
      res = y == 'Y' ? 1 : 0;
    }

    if (x == 'H') {
      res = y == 'O' ? 1 : 0;
    }
  }

  printf("lres is %d %c %c \n", res, x, y);

  return res;
}

int main() {
  char ll, lr, ml, mr;
  scanf("%s%s", &ml, &mr);
  scanf("%s%s", &ll, &lr);

  int lres = res(ml, ll);

  printf("tmp is %d %c %c \n 99999", lres, ml, lr);
  if (lres == 1) {
    int tmp = res(ml, lr);
    if (tmp == 1 || tmp == 2) {
      printf("MING\n");
    } else {
      if (res(mr, lr) == 1) {
        printf("MING\n");
      } else {
        printf("LIHUA\n");
      }
    }
  }

  if (lres == 2) {
    int tmp2 = res(mr, lr);
    if (tmp2 == 1) {
      printf("MING\n");
    } else if (tmp2 == 0) {
      printf("LIHUA\n");
    } else if (tmp2 == 2) {
      printf("TIE\n");
    }
  }

  if (lres == 0) {
    int tmp3 = res(mr, ll);
    if (tmp3 == 0 || tmp3 == 2) {
      printf("LIHUA\n");
    } else {
      int tmp4 = res(mr, lr);
      if (tmp4 == 1 || tmp4 == 2) {
        printf("MING\n");
      } else {
        printf("LIHUA\n");
      }
    }
  }

  return 0;
}
