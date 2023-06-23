package com.company;

public class Main {

    public static void main(String[] args) {
        // if, else if y else
        int numeroIf = 0;

        if (numeroIf<0){
            System.out.println("La variable numeroIf " + numeroIf + " es negativo");
        }
        else if(numeroIf>0){
            System.out.println("La variable numeroIf " + numeroIf + " es positivo");
        } else {
            System.out.println("La variable numeroIf es 0");
        }

        //while
        int numeroWhile = 1;

        while(numeroWhile < 3){
            numeroWhile++;
            System.out.println("La variable numeroWhile ahora vale: " + numeroWhile);
        }

        //do while
        //Al no cumplirse la condición, solo entra en el bucle una vez
        int numeroDoWhile = 3;
        do{
            numeroDoWhile++;
            System.out.println("La variable numeroDoWhile ahora vale: " + numeroDoWhile);
        }while(numeroDoWhile < 3);

        //for
        for(int numeroFor = 0; numeroFor <= 5; numeroFor++){
            System.out.println("La variable numeroFor ahora vale: " + numeroFor);
        }
    }
}