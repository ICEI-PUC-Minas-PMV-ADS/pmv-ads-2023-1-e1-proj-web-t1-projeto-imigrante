
const contacts = [
    {
        jesuitas: {
            website: "Website: www.sjmrbrasil.org",
            address: 'Address: Avenida Amazonas, 641 - 8th Floor, Centro - Belo Horizonte/MG',
            phone: 'Phone(s): +55 (31) 3212-45',
            docsProtect: 'Document Protection: (31) 99210-3444 and 99210-3443',
            juridic: "Legal Protection: juridicobh@sjmrbrasil.org and (31) 99210-3435",
            social: "Social Protection: socialbh@sjmrbrasil.org and (31) 99210-3434",
            survive: "Livelihood: trabalhobh@sjmrbrasil.org and (31) 99428-0043",
            integration: "Integration (Languages and Culture): (Languages and Culture): cultura@sjmrbrasil.org and (31) 99927-5507"
        }
    },
    {
        fraternidade: {
            website: "Website: www.missoeshumanitarias.org",
            address: "Address: Rua Presidente Antônio Carlos, 400 - Carmo da Cachoeira, MG",
            phone: "Phone(s): +55 (35) 9719-7076 | +55 (35) 3225-1233",
            email: "Email: executivo@fraterinternacional.org"
        }
    },
    {
        jesuitasRoraima: {
            website: "Website: www.sjmrbrasil.org",
            address: "Address: Avenida General Ataíde Teive, 2386 A - Liberdade",
            phone: "Phone: (95) 99962-1000",
            email: "Email: coordenadorbv@sjmrbrasil.org"
        }
    },
    {
        jesuitasManaus: {
            website: "Website: www.sjmrbrasil.org",
            address: "Address: Av. Constatino Nery, No. 1029 - São Geraldo",
            phone: "Phone: (92) 99157-6097",
            email: "Email: atendimentomao@sjmrbrasil.org"
        }
    },
    {
        migracoesDf: {
            website: "Website: www.sjmrbrasil.org",
            address: "Address: Quadra 7 Conjunto C Lote 1, Vila Varjão - Lago Norte - Brasília/DF",
            phone: "Phone(s): +55 (61) 3340-2689 | +55 (61) 3447-8043 | +55 (61) 98173-7688",
            email: "Email: imdh@migrante.org.br | imdh.diretoria@migrante.org.br"
        }
    },
    {
        migracoesRs: {
            website: "Website: www.sjmrbrasil.org",
            address: "Address: Rua General Caldwell, No. 651, Bairro Menino Deus",
            phone: "Phone: (51) 3254-0140 and (51) 9995-5573 (WhatsApp)",
            email: "Email: atendimentopoa@sjmrbrasil.org"
        }
    },
    {
        caritasRj: {
            website: "Website: www.caritas-rj.org.br",
            address: "Address: Rua General Caldwell, No 651, Bairro Menino Deus",
            phone: "Phone: (51) 3254-0140 and (51) 9995-5573 (WhatsApp)",
            email: "Email: www.caritas-rj.org.br/contatos.html"
        }
    },
    {
        caritasSp: {
            website: "Website: www.sjmrbrasil.org",
            address: "Address: Avenida Marechal Eurico Gaspar Dutra, 1853, Parada Inglesa",
            phone: "Phone(s): +55 (11) 93904-5321",
            protection: "Document Protection: (31) 99210-3444 and 99210-3443",
            email: "Email: caritassp@caritassp.org.br"
        }
    },
    {
        cic: {
            website: "Website: https://justica.sp.gov.br/index.php/coordenacoes-e-programas/integracao-da-cidadania-cic/",
            address: "Address: Rua Barra Funda, 1020 - Barra Funda",
            phone: "Phone: +55 (11) 3115-2048 55",
            email: "Email: cicdoimigrante@sp.gov.br",
            activities: "Activities: assistance to immigrants and refugees, Portuguese classes, professional training, guidance on documentation and Sisconare",
            hours: "Service hours: 8 AM to 5 PM"
        }
    },
    {
        compassiva: {
            website: "Website: compassiva.org.br",
            address: "Address: Rua da Glória, 900 - Liberdade",
            phone: "Phone(s): +55 (11) 2537-3441",
            email: "Email: contato@compassiva.org.br",
            activities: "Activities carried out: revalidation of undergraduate degrees for refugees."
        }
    },
    {
        crai: {
            website: "Website: www.prefeitura.sp.gov.br/cidade/secretarias/direitos_humanos/imigrantes_e_trabalho_decente/crai",
            address: "Address: Rua Major Diogo, 834, Bela Vista",
            phone: "Phones: +55 (11) 2361-3780 | +55 (11) 2361-5069",
            email: "Email: crai@sefras.org.br"
        }
    },
    {
        unifesp: {
            website: "Website: sp.unifesp.br/epm/medicina-preventiva/informes/acolhimento-psicossocial-intercultural",
            phone: "WhatsApp: +55 (11) 99179-1699",
            email: "Email: intercultural@unifesp.br"
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



