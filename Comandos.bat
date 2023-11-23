@echo off
echo ----paso 1 crear volumen de persistencia de datos para pod mysql----
kubectl apply -f "/1. Despliegue Bd/persistent-volume-claim.yaml"
echo ----paso 2 crear pod para mysql----
kubectl apply -f "/1. Despliegue Bd/mysql.yaml"
echo ----paso intermedio desactivacion de instancia local de MYSQL (Ejecutar cómo administrador si se tiene el servicio de MySQL80 instalado)
net stop MYSQL80
echo ----paso 3 redireccionador de puerto al 3306
kubectl port-forward mysql-service 3306:3306
echo ----DESPLIEGUE DE API-----
kubectl apply -f "/2. Despliegue de API/deployment_nodejs.yaml"
kubectl apply -f "/2. Despliegue de API/ingress.yaml"
kubectl apply -f "/2. Despliegue de API/persistent-volume-claim.yaml"