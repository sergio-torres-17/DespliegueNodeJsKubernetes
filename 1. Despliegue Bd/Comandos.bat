@echo off
echo ----paso 1 crear volumen de persistencia de datos para pod mysql----
kubectl apply -f persistent-volume-claim.yaml
echo ----paso 2 crear pod para mysql----
kubectl apply -f mysql.yaml
echo ----paso intermedio desactivacion de instancia local de MYSQL (Ejecutar cómo administrador si se tiene el servicio de MySQL80 instalado)
net stop MYSQL80
echo ----paso 3 redireccionador de puerto al 3306
kubectl port-forward mysql-pod 3306:3306