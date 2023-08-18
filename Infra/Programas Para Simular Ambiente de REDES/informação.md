### 1 - Inicialmente precisamos instalar o [VMware Player 17](https://www.vmware.com/br/products/workstation-player/workstation-player-evaluation.html)

### 2 - Baixar [EVE NG](https://www.eve-ng.net/index.php/download/) Versão Comunity

### 3 - Baixar [PuTTY](https://www.putty.org/)

### 4 - Seguir o passo a passo para adicionar o RouterOS dentro do EVE-NG [LINK](https://www.eve-ng.net/index.php/documentation/howtos/howto-add-mikrotik-cloud-router/)

### 5 - Fazer a conexão via PuTTY no RouterOS criado através do portal do EVE-NG lembrando de selecionar a opção TELLNET no PuTTY para conectar no RouteOS

### 6 - Executar os seguintes comandos para encontar o endereço do RouterOS Criado

```JS
Login: admin
senha: vazia

ip
address
print

Resposta Esperada:
[admin@MikroTik] /ip address> print
Flags: X - disabled, I - invalid, D - dynamic
 #   ADDRESS            NETWORK         INTERFACE
 0 D 192.168.1.28/24    192.168.1.0     ether1

```

### 7 - Baixar [WinBox](https://mikrotik.com/download) Ferramente Da Mikrotik para conectar ao RouteOS Utilizando o endereço listado na ferramenta acima, após Abrir Winbox Escolher Legacy Mod nas opções acima.
