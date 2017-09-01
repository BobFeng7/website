all: wc map main


wc: wc.o
	gcc something wc.o wc

wc.o: wc.c
	gcc -o wc.c wc.o




wc.c
map.c
main.c