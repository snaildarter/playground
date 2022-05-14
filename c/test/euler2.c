/*************************************************************************
        > File Name: euler2.c
        > Author:
        > Mail:
        > Created Time: 五  5/13 23:54:30 2022
 ************************************************************************/

#include <stdio.h>

// int num[4000005];

int main() {
  //   num[1] = 1;
  //   num[2] = 2;

  //   long long sum = 2;
  //   for (int i = 3; 1; i++) {
  //     num[i] = num[i - 1] + num[i - 2];
  //     if (num[i] >= 4000000) {
  //       break;
  //     }
  //     if (num[i] % 2 == 0) {
  //       sum += num[i];
  //     }
  //   }
  //   printf("%lld\n", sum);

  int a = 1, b = 2, sum = 0;
  while (b < 4000000) {
    if (b % 2 == 0) {
      sum += b;
    }
    b += a;
    a = b - a;
  }
  printf("%d\n", sum);

  return 0;
}
