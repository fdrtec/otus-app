export const ProjectContactValues = {
  toaster: {
    issue: {
      createSuccess: 'Chamado criado com sucesso.',
      createFail: 'Não foi possível criar o chamado.',
    },
    message: {
      createSucess: 'Mensagem criada com sucesso',
      createFail: 'Não foi possível criar  a mensagem',
    }
  },
  status: {
    open: 'Aberto',
    closed: 'Fechado',
    finalized: 'Finalizado'
  },
  resources: {
    issues: 'issues',
    messages: 'messages',
    senders: 'senders'
  },
  placeholder: {
    issue: {
      inputText: 'Ex. Atividades não aparecem',
      inputTextArea: 'Ex. Quando entro no sistema via 3g não estou conseguindo visualizar atividades'
    },
    message: {
      inputTextArea: 'Ex. Não funcionou o procedimento, preciso de mais detalhes'
    }
  },
  title: {
    contactProject: 'Contato com o Projeto',
    solicitation: 'Solicitação',
    historic: 'Histórico',
    instructionsForUse: 'Instruções de Uso',
    btnOpenIssue: 'ABRIR CHAMADO',
    btnAnswer: 'RESPONDER',
    issueInputText: 'Titulo',
    issueInputTextArea: 'Descreva a situação',
    messageInputTextArea: 'Escreva uma nova mensagem',
    withoutContacts: 'Nenhum chamado encontrado',
    withoutMessage: 'Em breve responderemos o seu chamado.',
    lastMessage: 'Última mensagem |'

  },
  tooltip: {
    save: 'salvar',
    reset: 'resetar',
    return: 'voltar',
    viewMore: 'ver +'
  },
  context: {
    cardFormContact: {
      p1: 'Caso esteja acessando este módulo pela primeira vez, e precise contactar-se com o projeto para informar\n' +
        '        alguma anomalia do sistema ou simplesmente tentar solucionar uma dúvida,\n' +
        '        clique no botão "criar chamado" para acessar o formulário de solicitação.',
      p2: 'Caso queira somente ver a respostas dos especialistas em relação aos chamados criados, vá para\n' +
        '        a seção de histórico e expanda um ou mais titulos.',
      p3: 'Se necessário tirar mais dúvidas sobre a solução enviada, crie uma nova mensagem com mais detalhes ou sugestões.\n' +
        '        Em "ver +" atualize-se sobre a conversa com todas as mensagens do mesmo chamado.'
    }
  }
};
