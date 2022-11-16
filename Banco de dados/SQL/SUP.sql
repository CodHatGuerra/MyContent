If Not Exists (select * from sys.tables where NAME = 'SUP_Estado') 
Begin
  Create Table SUP_Estado (
         CodigoEstado       Numeric(10)  NOT NULL,
         DescricaoEstado    Varchar(150),
         Ordem              Numeric(10),
         DataAtualizacao    Datetime,
         UsuarioAtualizacao Numeric(10)
  )

  Alter Table SUP_Estado
    Add Constraint SUP_Estado_PK Primary Key(CodigoEstado)
End
Go


INSERT INTO SUP_Estado (
       CodigoEstado,
       DescricaoEstado,
       Ordem,
       DataAtualizacao
) SELECT 1, 'Pendente', 1, GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 1) UNION
  SELECT 2, 'Em andamento', 2, GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 2) UNION
  SELECT 3, 'Resolvido', 3, GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 3) UNION
  SELECT 4, 'Sem ação', 4, GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 4);
GO


If Not Exists (select * from sys.tables where NAME = 'SUP_Categoria') 
Begin
  Create Table SUP_Categoria (
         CodigoCategoria     Numeric(10)  NOT NULL,
         DescricaoEstado     Varchar(150),
         DataAtualizacao     Datetime,
         UsuarioAtualizacao  Numeric(10)
 )

  Alter Table SUP_Categoria
    Add Constraint SUP_Categoria_PK Primary Key(CodigoCategoria)
End
Go


INSERT INTO SUP_Categoria (
       CodigoCategoria,
       DescricaoEstado,
       DataAtualizacao
) SELECT 1, 'Ajuste De Lançamentos', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 1) UNION
  SELECT 2, 'Alterações De Preços', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 2) UNION
  SELECT 3, 'Arquivos Protheros', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 3) UNION
  SELECT 4, 'Balança', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 4) UNION
  SELECT 5, 'Computador', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 5) UNION
  SELECT 6, 'Consumo Interno', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 6) UNION
  SELECT 7, 'Contas', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 7) UNION
  SELECT 8, 'Correção De Sangria Errada', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 8) UNION
  SELECT 9, 'CPF Inválido', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 9) UNION
  SELECT 10, 'Diferença No Fechamento De Caixa', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 10) UNION
  SELECT 11, 'Dúvidas Sobre Emissão De Cupom', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 11) UNION
  SELECT 12, 'Dúvidas Sobre O App Fidelidade', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 12) UNION
  SELECT 13, 'Dúvidas Sobre Sistema', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 13) UNION
  SELECT 14, 'Editar', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 14) UNION
  SELECT 15, 'Exlusão De Lançamento', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 15) UNION
  SELECT 16, 'Exportação De XMLs Dos Cupons Fiscais', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 16) UNION
  SELECT 17, 'Impressora', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 17) UNION
  SELECT 18, 'Inclusão De Produtos', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 18) UNION
  SELECT 19, 'Inclusão De Sangria', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 19) UNION
  SELECT 20, 'Instabilidade', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 20) UNION
  SELECT 21, 'Login', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 21) UNION
  SELECT 22, 'Sangria Duplicada', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 22) UNION
  SELECT 23, 'Sat Bematech', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 23) UNION
  SELECT 24, 'Sat Dimep', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 24) UNION
  SELECT 25, 'Sat Elgin', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 25) UNION
  SELECT 26, 'Sat Epson', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 26) UNION
  SELECT 27, 'Sat Tanca', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 27) UNION
  SELECT 28, 'Sincronização', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 28) UNION
  SELECT 29, 'Sistema Fechando Sozinho', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 29) UNION
  SELECT 30, 'Sistema Travando', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 30) UNION
  SELECT 31, 'Troca De Usuário', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 31) UNION
  SELECT 32, 'Vendas', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 32) UNION
  SELECT 33, 'Vendas Parciais', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 33) UNION
  SELECT 34, 'Duplicidade De Abertura', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 34) UNION
  SELECT 35, 'Impressora ECF', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 35);
GO


If Not Exists (select * from sys.tables where NAME = 'SUP_Prioridade') 
Begin
  Create Table SUP_Prioridade (
         CodigoPrioridade    Numeric(10)  NOT NULL,
         DescricaoPrioridade Varchar(150),
         DataAtualizacao     Datetime,
         UsuarioAtualizacao  Numeric(10)
 )

  Alter Table SUP_Prioridade
    Add Constraint SUP_Prioridade_PK Primary Key(CodigoPrioridade)
End
Go

If Not Exists (select * from sys.tables where NAME = 'SUP_Processo') 
Begin
  Create Table SUP_Processo (
         CodigoProcesso      Numeric(10)  NOT NULL,
         DescicaoProcesso    Varchar(150),
         DataAtualizacao     Datetime,
         UsuarioAtualizacao  Numeric(10)
 )

  Alter Table SUP_Processo
    Add Constraint SUP_Processo_PK Primary Key(CodigoProcesso)
End
Go


INSERT INTO SUP_Processo (
       CodigoProcesso,
       DescicaoProcesso,
       DataAtualizacao
) SELECT 1, 'Abertura Caixa', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 1) UNION
  SELECT 2, 'Condigurações', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 2) UNION
  SELECT 3, 'Exportações', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 3) UNION
  SELECT 4, 'Fechamento Caixa', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 4) UNION
  SELECT 5, 'Login/Logout', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 5) UNION
  SELECT 6, 'Periféricos', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 6) UNION
  SELECT 7, 'Produto', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 7) UNION
  SELECT 8, 'Relatórios', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 8) UNION
  SELECT 9, 'Retirada', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 9) UNION
  SELECT 10, 'Sangria', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 10) UNION
  SELECT 11, 'Sat', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 11) UNION
  SELECT 12, 'Sistema', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 12) UNION
  SELECT 13, 'Vendas', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 13) UNION
  SELECT 14, 'Vendas Parcias', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 14) UNION
  SELECT 15, 'Cadastro', GETDATE() WHERE NOT EXISTS(SELECT 1 FROM SUP_Estado WHERE CodigoEstado = 15)
GO


If Not Exists (select * from sys.tables where NAME = 'SUP_Chamado') 
Begin
  Create Table SUP_Chamado (
         CodigoChamado       Numeric(10) NOT NULL IDENTITY(1,1),
         NumeroChamado       Numeric(10),
         CodigoEmpresa       Numeric(10),
         Assunto             Varchar(250),
         DescricaoProblema   Varchar(MAX), 
         DataSolicitacao     Datetime,
         CodigoCategoria     Numeric(10),
         CodigoPrioridade    Numeric(10),
         CodigoAtendente     Numeric(10),
         CodigoEstado        Numeric(10),
         CodigoProcesso      Numeric(10),
         DataResolucao       Datetime, 
         DescricaoResolucao  Varchar(MAX),
         DataAtualizacao     Datetime,
         UsuarioAtualizacao  Numeric(10)
 )

  Alter Table SUP_Chamado
    Add Constraint SUP_Chamado_PK Primary Key(CodigoChamado)

 Alter Table SUP_Chamado
   Add Constraint SChamado_SPessoa_E_FK Foreign key (CodigoEmpresa) References SIS_Pessoa(CodigoPessoa)

 Alter Table SUP_Chamado
   Add Constraint SChamado_SCategoria_FK Foreign key (CodigoCategoria) References SUP_Categoria(CodigoCategoria)

 Alter Table SUP_Chamado
   Add Constraint SChamado_SPrioridade_FK Foreign key (CodigoPrioridade) References SUP_Prioridade(CodigoPrioridade)

 Alter Table SUP_Chamado
   Add Constraint SChamado_SPessoa_A_FK Foreign key (CodigoAtendente) References SIS_Pessoa(CodigoPessoa)
   
 Alter Table SUP_Chamado
   Add Constraint SChamado_SProcesso_FK Foreign key (CodigoProcesso) References SUP_Processo(CodigoProcesso)

 Alter Table SUP_Chamado
   Add Constraint SChamado_SEstado_FK Foreign key (CodigoEstado) References SUP_Estado(CodigoEstado)
End
Go

SELECT * FROM SUP_Processo;

