#### 1 - Para efetuar a instalação do docker siga o passo a passo do seguinte link [Clique Aqui](https://phoenixnap.com/kb/install-docker-on-ubuntu-20-04)

---

#### 2 - Para Liberar a porta de acesso para o docker altere o aquivo do seguinte caminho

### /lib/systemd/system/docker.service

### Adicione as seguintes linhas a este arquivo

```
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2376
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
