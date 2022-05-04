/*************************************************************************
    > File Name: t109.c
    > Author:
    > Mail:
    > Created Time: 六  4/30 18:48:16 2022
 ************************************************************************/

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    int isYes = 0;
    while (n)
    {
        if (n % 10 % 2 == 0)
        {
            isYes = 1;
            printf("YES\n");
            break;
        }
        n = n / 10;
    }
    if (!isYes)
    {
        printf("NO\n");
    }
    return 0;
}
