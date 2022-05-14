/*************************************************************************
	> File Name: euler14.c
	> Author: 
	> Mail: 
	> Created Time: 六  5/14 03:24:47 2022
 ************************************************************************/

#include<stdio.h>

int num[10000005];

int func(long long x) {
    if (x == 1) return 1;
    if (x < 1000000 && num[x] != 0) {
        return num[x];
    }
    int t = 0;
    if (x % 2 == 0) {
        t = func(x / 2) + 1;
    } else {
        t =  func(3 * x + 1) + 1;
    }
    if (x < 1000000) {
        num[x] = t;
    }
    return t;
}

int main() {
    int ans = 0, cnt = 0;
    for (int i = 1; i < 1000000; i++) {
        int t = func(i);
        if (t > cnt) {
            ans = i;
            cnt = t;
        }
    }
    printf("%d\n", ans);

    return 0;
}
