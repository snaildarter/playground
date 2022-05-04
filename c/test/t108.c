/*************************************************************************
    > File Name: t108.c
    > Author:
    > Mail:
    > Created Time: 六  4/30 18:36:38 2022
 ************************************************************************/

#include <stdio.h>

int main()
{
    char type;
    double m, n;

    scanf("%s", &type);
    scanf("%lf%lf", &m, &n);

    if (type == 'r')
    {
        printf("%.2lf\n", m * n);
    }
    else
    {
        printf("%.2lf\n", m * n / 2);
    }
    return 0;
}
