#### 1 - Para efetuar a instalação do docker siga o passo a passo do seguinte link [Clique Aqui](https://phoenixnap.com/kb/install-docker-on-ubuntu-20-04)

---

#### 2 - Para Liberar a porta de acesso para o docker altere o aquivo do seguinte caminho

### /lib/systemd/system/docker.service

### Adicione as seguintes linhas a este arquivo

```
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target docker.socket firewalld.service containerd.service time-set.target
Wants=network-online.target containerd.service
Requires=docker.socket

[Service]
Type=notify
ExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2376
ExecReload=/bin/kill -s HUP $MAINPID
TimeoutStartSec=0
RestartSec=2
Restart=always
StartLimitBurst=3
StartLimitInterval=60s
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
TasksMax=infinity
Delegate=yes
KillMode=process
OOMScoreAdjust=-500

[Install]
WantedBy=multi-user.target

```

#### Apartir deste momento voce está definindo a porta para o Docker engine em 2376

#### Após salvar o arquivo excecute os seguintes comandos:

```
sudo systemctl daemon-reload
sudo systemctl restart docker.service
sudo systemctl status docker
sudo netstat -lntp | grep dockerd
```

#### Verifique se o docker está conseguindo baixar uma imagem:

```
docker pull hello-world

docker run hello-world
```

#### Geralmente também é necessario o Docker Composer, para instalar

```
 sudo apt-get update
 apt  install docker-compose
 sudo apt-get install docker-compose-plugin
```
___
#### O Docker Compose é uma ferramenta que permite definir e executar aplicativos multi-container usando o Docker. Ele é usado para gerenciar a configuração e a orquestração de vários contêineres Docker como uma unidade coesa.

#### O Docker Compose utiliza arquivos de definição YAML para descrever a configuração do aplicativo e as dependências entre os contêineres. Com esses arquivos, você pode definir os serviços, redes, volumes e outras configurações necessárias para o funcionamento do aplicativo.

#### A principal vantagem do Docker Compose é que ele simplifica a implantação e a execução de aplicativos que consistem em vários componentes ou microserviços. Ele permite definir as imagens do Docker a serem usadas, as portas que serão expostas, as variáveis de ambiente, os volumes de dados compartilhados e muito mais.

#### Com o Docker Compose, você pode iniciar todos os contêineres de uma aplicação com um único comando e também pode pará-los e removê-los facilmente. Isso torna o processo de desenvolvimento, teste e implantação de aplicativos mais rápido e eficiente, pois você pode definir facilmente um ambiente consistente para o desenvolvimento e implantação.

#### Além disso, o Docker Compose permite que você defina redes personalizadas para seus contêineres e os conecte entre si. Isso facilita a comunicação e o compartilhamento de recursos entre os serviços.

#### Em resumo, o Docker Compose é uma ferramenta poderosa para orquestração de contêineres Docker, permitindo que você defina e execute aplicativos complexos com facilidade, simplificando o processo de desenvolvimento e implantação de aplicativos distribuídos.