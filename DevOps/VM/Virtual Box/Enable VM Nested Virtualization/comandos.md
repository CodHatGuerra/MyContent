### 1. Liste suas VMS utilizando o comando abaixo via CMD
#### `"C:\Program Files\Oracle\VirtualBox\VBoxManager.exe" list vms`
### 2. Após Conseguir o ID da VM Utilize o seguinte comando
#### `"C:\Program Files\Oracle\VirtualBox\VBoxManager.exe" modifyvm "nome vm" --nested-hw-virt on`
#### Teste a virtualização ninhada, caso mesmo assim houver erros de virtualização ninhada, siga com o seguinte comando via CMD.
#### `bcdedit /set hypervisorlaunchtype off` e reinicie o computador.