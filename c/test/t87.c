/*************************************************************************
    > File Name: t87.c
    > Author:
    > Mail:
    > Created Time: 六  4/30 15:49:44 2022
 ************************************************************************/

#include <stdio.h>

int main()
{
    double a, b;

    scanf("%lf%lf", &a, &b);
    printf("%.2lf\n", (a + b) * 2);
    printf("%.2lf\n", a * b);
    return 0;
}
