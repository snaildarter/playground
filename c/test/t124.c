/*************************************************************************
    > File Name: t124.c
    > Author:
    > Mail:
    > Created Time: 六  4/30 19:08:48 2022
 ************************************************************************/

#include <stdio.h>

int main()
{
    int a, b, c, d;
    scanf("%d%d%d%d", &a, &b, &c, &d);
    if ((a >= 1 || b <= 50) && (c <= 25 || d >= 5))
    {
        printf("ok\n");
    }
    else
    {
        printf("pass\n");
    }
    return 0;
}
