/*************************************************************************
	> File Name: euler4.c
	> Author: 
	> Mail: 
	> Created Time: 六  5/14 00:09:51 2022
 ************************************************************************/

#include<stdio.h>

int func(int x) {
    int t = 0, r = x;
    while (x != 0) {
        t = t * 10 + x % 10;
        x /= 10;
    }
    return t == r;
}

int main() {
    int max = 0;
    for (int i = 100; i < 1000; i++) {
        for (int j = i; j < 1000; j++) {
            int t = i * j;
            if (func(t)) {
                if (max < t) {
                    max = t;
                }
            }
        }
    }

    printf("%d\n", max);
    return 0;
}
