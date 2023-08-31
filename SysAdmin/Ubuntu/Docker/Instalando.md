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

---

#### Alguns problemas sobre WSL :

```
PS C:\Windows\system32> wsl.exe -l -v
Windows Subsystem for Linux has no installed distributions.

Use 'wsl.exe --list --online' to list available distributions
and 'wsl.exe --install ' to install.

Distributions can also be installed by visiting the Microsoft Store:
https://aka.ms/wslstore
Error code: Wsl/WSL_E_DEFAULT_DISTRO_NOT_FOUND
PS C:\Windows\system32>
```
