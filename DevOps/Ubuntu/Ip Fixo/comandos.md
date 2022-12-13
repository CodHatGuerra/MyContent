#### 1. Entre no destino `/etc/netplan/` de um `ls` e edite o arquivo no qual existir dentro deste repositorio, geralmente com o nome de *00-installer-config.yaml* ou *config.yaml*

#### 2. Digite o comando `ip a` e anote o nome da interface exemplos de nome `enp0s3`

#### 3. adicione essas informações dentro do arquivo editado adicionando sua respectiva informação em cada bloco.
```js
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      addresses:
        - 192.168.1.35/24
      gateway4: 192.168.1.172
      nameservers:
        search: [mydomain, otherdomain]
        addresses: [1.1.1.1, 1.0.0.1]
```
#### 3. apos salvar rode o comando `netplan try` e aguarde para o sistema validar a nova configuração, após a confirmação da validação utilize o comando `sudo netplan apply`. caso houver algum erro de syntax consultar [NetPlan](https://netplan.io/examples)

