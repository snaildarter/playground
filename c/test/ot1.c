/*************************************************************************
        > File Name: ot1.c
        > Author:
        > Mail:
        > Created Time: 六  5/14 01:15:34 2022
 ************************************************************************/

#include <stdio.h>
#include <stdlib.h>

int main() {
  int *num = (int *)malloc(100000 * sizeof(int));

  num[0] = 13;
  num[99999] = 999;

  printf("%d %d %d\n", num[0], num[99999], num[12345]);

  free(num);
  num = NULL;

  return 0;
}
