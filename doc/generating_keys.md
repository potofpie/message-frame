# Generating keys via cmd
## Windows
Install WSL then follow Linux/Mac instuctions 

## Linux/Mac
1. generate the private key without password 
```bash
ssh-keygen -t rsa -b 1024 
```
2. then make the public key
```bash
openssl rsa -in ./key -out ./key.public -pubout
```