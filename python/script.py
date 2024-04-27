# script.py
import sys
import time



def process_data():
    for i in range(3):
        print(f"Data line {i+1}")
        print("hello everyone")
        sys.stdout.flush()
        # time.sleep(1)

# Gọi hàm process_data khi script được thực thi
if __name__ == "__main__":
    process_data()
    
    # print("kieu thuong")


