/*************************************************************************
        > File Name: list.c
        > Author:
        > Mail:
        > Created Time: 六  5/14 02:24:53 2022
 ************************************************************************/

#include <stdio.h>
#include <stdlib.h>

typedef struct node {
  int data;
  struct node *next;
} node;

typedef struct list {
  int size;
  struct node *head;
} list;

node *get_new_node(int val) {
  node *p = (node *)malloc(sizeof(node));
  p->data = val;
  p->next = NULL;
  return p;
}

void delete_list(list *p) {
  node *q = p->head;
  for (int i = 0; i <= p->size; i++) {
    node *t = q->next;
    free(q);
    q = t;
  }
  free(p);
}

list *init() {
  list *p = (list *)malloc(sizeof(list));
  p->head = get_new_node(0);
  p->size = 0;
  return p;
}

void show_list(list *l) {
  for (node *p = l->head->next; p != NULL; p = p->next) {
    printf("%d->", p->data);
  }
}

int insert_ele(list *l, int ind, int val) {
  if (ind > l->size) {
    return 1;
  }
  node *p = l->head;
  for (int i = 0; i < ind; i++) {
    p = p->next;
  }
  node *q = get_new_node(val);
  q->next = p->next;
  p->next = q;
  l->size++;
  return 0;
}

int delete_ele(list *l, int ind) {
  if (l->size <= ind) {
    return 1;
  }
  node *p = l->head;
  for (int i = 0; i < ind; i++) {
    p = p->next;
  }
  node *q = p->next;
  p->next = q->next;
  free(q);
  l->size--;
  return 0;
}

int main() {
  int n;
  scanf("%d", &n);
  list *l = init();
  for (int i = 0; i < n; i++) {
    int a, b;
    scanf("%d%d", &a, &b);
  }
  return 0;
}
