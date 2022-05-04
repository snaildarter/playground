/*************************************************************************
	> File Name: t114.c
	> Author: 
	> Mail: 
	> Created Time: 六  4/30 19:02:08 2022
 ************************************************************************/

#include <stdio.h>

int main() {
    char x;
    scanf("%s", &x);

    if (x == 'h') {
        printf("He\n");
    } else if (x == 'l') {
        printf("Li\n");
    } else if (x == 'c') {
        printf("Cao\n");
    } else if (x == 'd') {
        printf("Duan\n");
    } else if (x == 'w') {
        printf("Wang\n");
    } else {
        printf("Not Here\n");
    }
    return 0;
}
