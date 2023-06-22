
const contacts = [
    {
        jesuitas: {
            website: "Site: www.sjmrbrasil.org",
            adress: 'Endereço: Avenida Amazonas, 641 - 8º Andar, Centro - Belo Horizonte/MG',
            phone: 'Telefone(s): +55 (31) 3212-45',
            docsProtect: 'Proteção Documental: (31) 99210-3444 e 99210-3443',
            juridic: "Proteção Jurídica: juridicobh@sjmrbrasil.org e (31) 99210-3435",
            social: "Proteção Social: socialbh@sjmrbrasil.org e (31) 99210-3434",
            survive: "Meios de Vida: trabalhobh@sjmrbrasil.org e (31) 99428-0043",
            integration: "Integração (Línguas e Cultura): (Línguas e Cultura): cultura@sjmrbrasil.org e (31) 99927-5507"
        }
    },
    {
        fraternidade: {
            website: "Site: www.missoeshumanitarias.org",
            adress: "Endereço: Rua Presidente Antônio Carlos, 400 - Carmo da Cachoeira, MG",
            phone: "Telefone(s): +55 (35) 9719-7076 | +55 (35) 3225-1233",
            email: "E-mail: executivo@fraterinternacional.org"
        }

    },
    {
        jesuitasRoraima: {
            website: "Site: www.sjmrbrasil.org",
            adress: "Endereço: Avenida General Ataíde Teive, 2386 A - Liberdade ",
            phone: "Telefone: (95) 99962-1000 ",
            email: "coordenadorbv@sjmrbrasil.org"
        }
    },
    {
        jesuitasManaus: {
            website: "Site: www.sjmrbrasil.org",
            adress: "Endereço: Av. Constatino Nery, nº 1029 - São Geraldo ",
            phone: "Telefone: (92) 99157-6097 ",
            email: "atendimentomao@sjmrbrasil.org"
        }
    },

    {
       migracoesDf: {
            website: "Site: www.sjmrbrasil.org",
            adress: "Quadra 7 Conjunto C Lote 1, Vila Varjão - Lago Norte - Brasília/DF",
            phone: " Telefone(s): +55 (61) 3340-2689 | +55 (61) 3447-8043 | +55 (61) 98173-7688",
            email: "E-mail: imdh@migrante.org.br  | imdh.diretoria@migrante.org.br"
        }
    },
    {
        migracoesRs: {
             website: "Site: www.sjmrbrasil.org",
             adress: "Endereço: Rua General Caldwell, nº 651, Bairro Menino Deus",
             phone: "Telefone: (51) 3254-0140 e (51) 9995-5573 (WhatsApp) ",
             email: "E-mail: atendimentopoa@sjmrbrasil.org"
         }
     },
     {
        caritasRj: {
             website: "Site: www.caritas-rj.org.br",
             adress: "Endereço: Rua General Caldwell, nº 651, Bairro Menino Deus",
             phone: "Telefone: (51) 3254-0140 e (51) 9995-5573 (WhatsApp) ",
             email: "E-mail: www.caritas-rj.org.br/contatos.html"
         }
     },
     {
        caritasSp: {
             website: "Site: www.sjmrbrasil.org",
             adress: " Endereço: Avenida Marechal Eurico Gaspar Dutra, 1853, Parada Inglesa",
             phone: " Telefone(s): +55 (11) 93904-5321",
             protecao: " Proteção Documental: (31) 99210-3444 e 99210-3443",
             email: "E-mail: caritassp@caritassp.org.br"
         }
     },
     {
        cic: {
             website: "Site: https://justica.sp.gov.br/index.php/coordenacoes-e-programas/integracao-da-cidadania-cic/",
             adress: "Endereço: Rua Barra Funda, 1020 - Barra Funda",
             phone: "Telefone: +55 (11) 3115-2048 55",
             email: " E-mail: cicdoimigrante@sp.gov.br ",
             atividades: "Atividades: atendimento a imigrantes e a refugiados, aulas de português, capacitação profissional, orientação sobre documentação e sobre Sisconare",
             horário: "Horário de atendimento: das 8h às 17h"
         }
     },
     {
        compassiva: {
             website: "Site:compassiva.org.br",
             adress: "Endereço: Rua da Glória, 900 - Liberdade",
             phone: "Telefone(s): +55 (11) 2537-3441",
             email: "E-mail: contato@compassiva.org.br",
             atividades: "Atividades desenvolvidas: revalidação de diplomas de graduação de refugiados."
         }
     },
     {
       crai: {
             website: "Site: www.prefeitura.sp.gov.br/cidade/secretarias/direitos_humanos/imigrantes_e_trabalho_decente/crai",
             adress: "Endereço: Rua Major Diogo, 834, Bela Vista",
             phone: "Telefones: +55 (11) 2361-3780 | +55 (11) 2361-5069",
             email: "E-mail: crai@sefras.org.br"  
         }
     },
     {
        unifesp: {
             website: "Site: sp.unifesp.br/epm/medicina-preventiva/informes/acolhimento-psicossocial-intercultural",
             phone: "Whatsapp: +55 (11) 99179-1699",
             email: "E-mail: intercultural@unifesp.br"
         }
     }

];


const unifespElement = document.getElementById("unifesp");
for (let key in contacts[11].unifesp) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[11].unifesp[key]}`;;
    unifespElement.appendChild(listItem);
}


const craiElement = document.getElementById("crai");
for (let key in contacts[10].crai) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[10].crai[key]}`;;
    craiElement.appendChild(listItem);
}

const compassaivaElement = document.getElementById("compassiva");
for (let key in contacts[9].compassiva) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[9].compassiva[key]}`;;
    compassaivaElement.appendChild(listItem);
}



const cicElement = document.getElementById("cic");
for (let key in contacts[8].cic) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[8].cic[key]}`;;
    cicElement.appendChild(listItem);
}



const caritas2 = document.getElementById("caritas-sp");
for (let key in contacts[7].caritasSp) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[7].caritasSp[key]}`;;
    caritas2.appendChild(listItem);
}



const caritas1 = document.getElementById("caritas-rj");
for (let key in contacts[6].caritasRj) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[6].caritasRj[key]}`;;
    caritas1.appendChild(listItem);
}


const migracoes2 = document.getElementById("migracoes-rs");
for (let key in contacts[5].migracoesRs) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[5].migracoesRs[key]}`;;
    migracoes2.appendChild(listItem);
}


const migracoes1 = document.getElementById("migracoes-df");
for (let key in contacts[4].migracoesDf) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[4].migracoesDf[key]}`;;
    migracoes1.appendChild(listItem);
}



const jesuitasListManaus = document.getElementById("jesu-manaus");
for (let key in contacts[3].jesuitasManaus) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[3].jesuitasManaus[key]}`;;
    jesuitasListManaus.appendChild(listItem);
}



const jesuitasListRoraima = document.getElementById("jesu-roraima");
for (let key in contacts[2].jesuitasRoraima) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[2].jesuitasRoraima[key]}`;;
    jesuitasListRoraima .appendChild(listItem);
}


const fraternidadeList = document.getElementById("fraternidade");
for (let key in contacts[1].fraternidade) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[1].fraternidade[key]}`;;
    fraternidadeList.appendChild(listItem);
}


const jesuitaList = document.getElementById("jesuita");
for (let key in contacts[0].jesuitas) {
    let listItem = document.createElement('li');
    listItem.textContent = `${contacts[0].jesuitas[key]}`;;
    jesuitaList.appendChild(listItem);
}



