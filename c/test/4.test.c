/*************************************************************************
    > File Name: 4.test.c
    > Author:
    > Mail:
    > Created Time: 六  4/30 15:01:11 2022
 ************************************************************************/

#include <stdio.h>

int main()
{
    char str[100] = {0};
    while (scanf("%[^\n]", str) != EOF)
    {
        getchar();
        int ret = printf("%s", str);
        printf(" has %d chars!\n", ret);
    }
    return 0;
}
