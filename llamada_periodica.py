import requests
import time

def hacer_llamada():
    url = "https://essec.onrender.com/api"
    
    try:
        response = requests.get(url)
        
        # Verificamos el estado de la respuesta
        if response.status_code == 200:
            print("Llamada exitosa:", response.text)
        else:
            print(f"Error en la llamada. Código de estado: {response.status_code}")
    
    except requests.exceptions.RequestException as e:
        print(f"Excepción al hacer la solicitud: {e}")

def main():
    while True:
        hacer_llamada()
        time.sleep(5)  # Espera 5 segundos antes de la siguiente llamada

if __name__ == "__main__":
    main()
