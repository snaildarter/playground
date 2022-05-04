/*************************************************************************
	> File Name: t39.c
	> Author: 
	> Mail: 
	> Created Time: 六  4/30 15:59:59 2022
 ************************************************************************/

#include <stdio.h>

int main() {
    int begin, n;
    scanf("%d%d", &begin, &n);
    if(begin < 0) begin = 0;
    if(begin % 2) begin += 1;
    for (int i = 0; i < n; i++) {
        printf("%d\n", begin);
        begin += 2;
    }

    return 0;
}
