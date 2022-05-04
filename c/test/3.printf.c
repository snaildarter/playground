/*************************************************************************
    > File Name: 3.printf.c
    > Author:
    > Mail:
    > Created Time: 六  4/30 14:44:54 2022
 ************************************************************************/

#include <stdio.h>

int main()
{
    int n;
    while (scanf("%d", &n) != EOF)
    {
        int ret = printf("%d", n);
        printf(" has %d digits!\n", ret);
    };

    return 0;
}
