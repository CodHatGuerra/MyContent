### First you need Run Proxmox And install an Debian CT, or run it on a device.

#### 1. After Run you System you need install the Curl to transfer the server data to you computer, run this line bellow 
#### 1. `apt upgrade`
#### 2. `apt install curl `
#### 3. Para o inicio da instalação do Pihole siga co mo comando. 
#### `curl -sSL https://install.pi-hole.net | bash`

#### 1. Selecione o Upstream DNs Provider como *(Cloudlare)*, proximo passo selecione as configurações recomendadas, e em Privacy utilize Show Everthing,


### Lembrando que a Maquina na VM criada devera ter o IP Estatico, e esse ip sera o DNS utilizado para o FIltro de ADs.