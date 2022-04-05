#include <stdio.h>

int main() {
	double n, sum;
	scanf("%lf", &n);
	for (int i = 0; i < 6; i++) {
		sum = (sum + n) * (1 + 0.00417);
	}
	printf("%.2lf\n", sum);
	return 0;
}
