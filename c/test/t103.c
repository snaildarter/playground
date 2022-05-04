/*************************************************************************
	> File Name: t103.c
	> Author: 
	> Mail: 
	> Created Time: 六  4/30 18:29:07 2022
 ************************************************************************/

#include <stdio.h>

int main() {
    int a, b;
    scanf("%d%d", &a, &b);
    if (a % b == 0) {
        printf("YES\n");
    } else {
        printf("NO\n");
    }
    return 0;
}
