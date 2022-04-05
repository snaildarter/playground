#include <stdio.h>

int main()
{
    double pi = 3.14, r;
    scanf("%lf", &r);
    printf("%.2lf\n", 2 * pi * r);
    printf("%.2lf\n", pi * r * r);
    return 0;
}