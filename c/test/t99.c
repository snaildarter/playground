#include <stdio.h>

int main()
{
	double v, a;
	scanf("%lf%lf", &v, &a);
	printf("%.2lf\n", v * v / (a * 2));
	return 0;
}
