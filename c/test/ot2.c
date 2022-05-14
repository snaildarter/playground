/*************************************************************************
        > File Name: ot2.c
        > Author:
        > Mail:
        > Created Time: 六  5/14 01:43:29 2022
 ************************************************************************/

#include <stdio.h>
#include <stdlib.h>
typedef struct vector {
  int *data;
  int size, cap;
} vector;

vector *init(int cnt) {
  vector *p = (vector *)malloc(sizeof(vector));
  p->data = (int *)malloc(sizeof(int) * cnt);
  p->size = 0;
  p->cap = cnt;
  return p;
}

void delete_vector(vector *p) {
  free(p->data);
  free(p);
}

void show_vector(vector *v) {
  for (int i = 0; i < v->size; i++) {
    printf("%d ", v->data[i]);
  }
  printf("end");
}

int insert_ele(vector *v, int ind, int val) {
  if (ind > v->size) {
    return 1;
  }
  if (v->size == v->cap) {
    v->cap *= 2;
    v->data = (int *)realloc(v->data, sizeof(int) * v->cap);
  }
  for (int i = v->size; i > ind; i--) {
    v->data[i] = v->data[i - 1];
  }
  v->data[ind] = val;
  v->size++;
  return 0;
}

int delete_ele(vector *v, int ind) {
  if (v->size <= ind) {
    return 1;
  }
  for (int i = ind; i < v->size - 1; i++) {
    v->data[i] = v->data[i + 1];
  }
  v->size--;
  return 0;
}

int main() { return 0; }
