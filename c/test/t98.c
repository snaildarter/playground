#include <stdio.h>

#define pi 3.14

int main()
{
	double r, h, S;
	scanf("%lf%lf", &r, &h);
	S = r * r * pi;
	printf("%.2lf\n", S);
	printf("%.2lf\n", S * h);
	return 0;
}
