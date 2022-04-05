#include <stdio.h>

int main()
{
	// int n, sum = 0;
	// scanf("%d", &n);
	// while (n != 0)
	// {
	// 	sum = sum + n % 10;
	// 	n = n / 10;
	// }
	// printf("%d\n", sum);

	char str[10] = {0}, sum = 0;
	scanf("%s", str);

	for (int i = 0; str[i]; i++)
	{
		sum = sum + str[i] - '0';
	}

	printf("%d\n", sum);

	return 0;
}
