describe('Gerenciador de filmes', () => {

  // CADASTRA FILMES NO SISTEMA
  it('deve cadastrar filme no sistema', () => {
    // Visita a página de cadastro
    cy.visit('http://localhost:8080/index.html')

    // Preenche os dados do filme
    cy.get('#title').click().type('Harry Potter e a Câmara Secreta')
    cy.get('#director').click().type(' Chris Columbus')
    cy.get('#year').click().type('2002')
    cy.get('#genre').select('Aventura')
    cy.get('#description')
      .click().type('De férias na casa de seus tios Dursley, Harry Potter (Daniel Radcliffe) recebe a inesperada visita de Dobby, um elfo doméstico, que veio avisá-lo para não retornar à Escola de Magia de Hogwarts, pois lá correrá um grande perigo.')
    cy.get('#submit-btn').click()

    // Verifica se o filme foi cadastrado com sucesso
    cy.contains('Harry Potter e a Câmara Secreta').should('be.visible')
  })

  // EDITAR NOME DO FILME CADASTRADO
  it('deve editar um filme cadastrado no sistema', () => {
    // Visita a página de cadastro
    cy.visit('http://localhost:8080/index.html')

    // Edita o nome do filme já cadastrado
    cy.get("button[onclick='editMovie(1)']").click()

    cy.get('#title').click().type('Editando o nome do filme')

    cy.get('#description')
      .click().type('Editando descriçao do filme O poderoso chefão')

    cy.get('#submit-btn').click()

    // Verifica se o nome do filme foi editado com sucesso
    cy.contains('Editando o nome do filme').should('be.visible')
  })

  //EXLCUIR FILMES JÁ CADASTRADOS
  it('deve excluir um filme cadastrado no sistema', () => {
    // Visita a página de cadastro
    cy.visit('http://localhost:8080/index.html')

    // Exclui o filme já cadastrado
    cy.get("button[onclick='deleteMovie(2)']").click()
    // Confirma a exclusão
    cy.get('#confirm-delete').click()

    // Verifica se o filme foi excluído com sucesso
    cy.get('.success-notification').should('be.visible')
    
  })

  // PESQUISA NOME DE FILMES CADASTRADOS
  it('deve pesquisa um filme cadastrado no sistema', () => {
    // Visita a página de cadastro
    cy.visit('http://localhost:8080/index.html')

    // Informar o nome do filme já cadastrado
    cy.get('#search-input').click().type('Cidade de Deus') 
    
    // Pesquisa o filme já cadastrado no sistema
    cy.get('#search-btn').click()
    
    // Validar o filme pela busca de pesquisa
    cy.contains('Cidade de Deus').should('be.visible')
  })

  // FILTRAR FILMES POR GÊNERO
  it('deve filtar filme por genero no sistema', () => {
    // Visita a página de cadastro
    cy.visit('http://localhost:8080/index.html')

    // Filtar o gênero do filme já cadastrado
    cy.get('#genre').select('Drama') 
    
    // Validar o filme por gênero
    cy.contains('Cidade de Deus').should('be.visible')
  })

})