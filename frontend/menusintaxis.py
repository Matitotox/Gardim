#importamos tads

from TADreserva import *
from TADLreservas import *
from TADColaR import *
from datetime import datetime

#lista de actividades
ACTIVIDADES = ["Futbol", "Tenis", "Paddle", "Gimnasio"]
Lreserva = crearLreserva()

opcion = 0

#menu
while (opcion != 7):

    print("--- MENÚ DE RESERVAS ---")
    print("1 Creacion de Reserva")
    print("2 Modificación de Reserva")
    print("3 Cancelar reserva")
    print("4 Mostrar reservas")
    print("5 Traslado de reservas")
    print("6 Generar hoja de ruta")
    print("7 Salir")

    opcion = int(input("Elija una opción: "))

#Creación de reservas
    if opcion == 1:

        res = crearreserva()
        print("Listado de actividades:")
        for i in range(len(ACTIVIDADES)):
            print(f"{i+1}- {ACTIVIDADES[i]}")
        
        indice = int(input("Seleccione el numero de la actividad: "))
        nactividad = ACTIVIDADES[indice - 1]

        prioridad = int(input("Prioridad: 1-Normal, 2-Socio, 3-Torneo: "))

        dia = int(input("Día (1-31): ")) #Se piden fechas para registrar la reserva
        mes = int(input("Mes (1-12): "))
        año = 2026
        hora_input = int(input("Hora (0-23): "))

        if(dia < 1 or dia > 31 or mes < 1 or mes > 12 or hora_input > 23 ): #Método para evitar fechas inválidas
            print("La fecha ingresada es invalida, intentelo de nuevo.")

        else:

        # Creamos el objeto date usando la librería
            fecha_obj = datetime(año, mes, dia).date()

            cargarreserva(res, nactividad, prioridad, fecha_obj, hora_input)
            agregarreserva(Lreserva, res)

            print("¡Reserva guardada con éxito!")

#Modificación de reservas
    elif opcion == 2:
        if(tamanio(Lreserva) == 0):
            print("No hay reservas cargadas.")
        else:  

            diaM = int(input("Ingrese el día (1-31): "))
            mesM = int(input("Ingrese el mes (1-12): "))
            fecha_buscada = datetime(2026, mesM, diaM).date() 
            horaM = int(input("Ingrese el horario: "))
        
            encontrada = False #Si se encuentra la fecha buscada, el valor cambia a True

            for i in range(tamanio(Lreserva)):
                res = recuperarreserva(Lreserva, i)
            
                if (verfecha(res) == fecha_buscada and verhora(res) == horaM): #Compara la fecha a modificar con reservas existentes
                    encontrada = True

                    op = int(input("Desea modificar el nombre: 1-Si, 2-No: "))
                    if(op == 1):
                        print("1-Futbol, 2-Tenis, 3-Paddle, 4-Gimnasio")
                        act_op = int(input("opcion: "))
                        modificarnactividad(res, ACTIVIDADES[act_op - 1])

                    op = int(input("Desea modificar la prioridad: 1-Si, 2-No: "))
                    if(op == 1):
                        prioridad_n = int(input("Nueva prioridad (1, 2 o 3): "))
                        modificarprioridad(res, prioridad_n)

                    op = int(input("Desea modificar la fecha: 1-Si, 2-No: "))
                    if(op == 1):
                        dN = int(input("Nuevo día: "))
                        mN = int(input("Nuevo mes: "))
                        fecha_n = datetime(2026, mN, dN).date()
                        modificarfecha(res, fecha_n)

                    op = int(input("Desea modificar la hora: 1-Si, 2-No: "))
                    if(op == 1):
                        hora_n = int(input("Ingresar nueva hora: "))
                        modificarhora(res, hora_n)

            if encontrada == False:
                print("No se encontró la reserva solicitada.")

#Eliminación de reservas
    elif opcion == 3:

        diaM = int(input("Ingrese el día (1-31): "))
        mesM = int(input("Ingrese el mes (1-12): "))
        fecha_buscada = datetime(2026, mesM, diaM).date() 
        horaM = int(input("Ingrese el horario: "))

        encontrada = False

        for i in range(tamanio(Lreserva)):
            res = recuperarreserva(Lreserva, i)
            
            if(verfecha(res) == fecha_buscada and verhora(res) == horaM):
                encontrada = True
                op = int(input("¿Confirmar eliminación? 1-Si, 2-No: "))

                if(op == 1):
                    eliminarreserva(Lreserva, res)
                    print("Reserva eliminada.")
                else:
                    print("Operación cancelada.")
                break # Salimos del bucle una vez encontrada

        if encontrada == False:
            print("Reserva no encontrada.")

#Muestra de reservas
    elif opcion == 4:

        if(tamanio(Lreserva) == 0):
            print("No hay reservas cargadas.")
        else:
            print("\n--- LISTADO DE RESERVAS ---")
            for i in range(tamanio(Lreserva)):
                res = recuperarreserva(Lreserva, i)
                print(f"Actividad: {vernactividad(res)} | Prioridad: {verprioridad(res)} | Fecha: {verfecha(res)} | Hora: {verhora(res)}hs")

#Traslado de reservas
    elif opcion == 5:
        
        if(tamanio(Lreserva) == 0):
            print("No hay reservas cargadas.")
        else:    
            print("1. Traslado por lluvia/cierre")
            print("2. Limpieza de calendario")

            subopcion = int(input("Elija subopción: "))

            if (subopcion == 1):
                d_no = int(input("Ingrese día no disponible: "))
                m_no = int(input("Ingrese mes no disponible: "))
                fecha_no = datetime(2026, m_no, d_no).date()
    
                d_si = int(input("Ingrese día a trasladar: "))
                m_si = int(input("Ingrese mes a trasladar: "))
                fecha_si = datetime(2026, m_si, d_si).date()

                for i in range(tamanio(Lreserva)):
                    res = recuperarreserva(Lreserva, i)
                    if (verfecha(res) == fecha_no):
                        modificarfecha(res, fecha_si)

                print("Reservas trasladadas exitosamente.")

            elif (subopcion == 2):
                d_elim = int(input("Ingrese día a limpiar: "))
                m_elim = int(input("Ingrese mes a limpiar: "))
                fecha_elim = datetime(2026, m_elim, d_elim).date()

                colaEliminar = crearCola()

                for i in range(tamanio(Lreserva)):
                    res = recuperarreserva(Lreserva, i)
                    if (verfecha(res) == fecha_elim):
                        encolar(colaEliminar, res)

                while not esVacia(colaEliminar):
                    reserva = desencolar(colaEliminar)
                    eliminarreserva(Lreserva, reserva)
                
                print("Limpieza completada.")

            else:
                print("Subopción inválida.")

#Hoja de ruta
    elif opcion == 6:
        
        if(tamanio(Lreserva) == 0):
            print("No hay reservas cargadas.")
        else:    
            dB = int(input("Ingrese día: "))
            mB = int(input("Ingrese mes: "))
            fecha_buscada = datetime(2026, mB, dB).date()

            lista_para_ordenar = []

            for i in range(tamanio(Lreserva)):
                res = recuperarreserva(Lreserva, i)
                if (verfecha(res) == fecha_buscada):
                    actividad = vernactividad(res)
                    prioridad = int(verprioridad(res))
                    lista_para_ordenar.append([actividad, prioridad])

            # Ordenamos la lista temporal por el segundo elemento (prioridad)
            lista_ordenada = sorted(lista_para_ordenar, key=lambda x: x[1], reverse=True)

            colaRuta = crearCola()
            for elem in lista_ordenada:
                encolar(colaRuta, elem)

            print("\n--- HOJA DE RUTA ORDENADA ---")
            while not esVacia(colaRuta):
                elem = desencolar(colaRuta)
                print(f"Actividad: {elem[0]} | Prioridad: {elem[1]}")

    elif opcion == 7:
        print("Saliendo del sistema...")

    else:
        print("Opción no válida.")

print("Programa finalizado.")