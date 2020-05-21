#!/usr/bin/python
# -*- coding: UTF-8 -*-

choice = raw_input('您好，欢迎来到古灵阁，请问您需要帮助吗？需要or不需要？')

if choice == '需要':
    number1 = int(input('请问您需要什么帮助呢？1 存取款；2 货币兑换；3 咨询'))
    if number1 == 2:
        print('金加隆和人民币的兑换率为1:51.3，即一金加隆=51.3人民币')
        number2 = int(input('请问您需要兑换多少金加隆呢？'))
        print('好的，我知道了，您需要付给我'+str(float(number2*51.3)) + '人民币')
    elif number1 == 1:
        print('您可以去存款窗口')
    elif number1 == 3:
        print('您可以去咨询窗口')
else:
    print('好的，再见。')
