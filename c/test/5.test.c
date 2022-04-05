#include <stdio.h>
#include <math.h>

int main()
{
	double x;
	while (~scanf("%lf", &x))
	{
		printf("%.2lf\n", pow(x, 1.0 / 3));
	}
	return 0;
}
