<template>
  <v-container fluid>
    <v-row class="py-3" justify="center" align="center">
      <v-col cols="12" sm="12" md="8" lg="8" shadow="none">
        <v-card v-if="step === 1" outlined style="border-radius: 10px;" class="pa-4">
          <v-card-title class="flex-fill">
            <div class="mr-3">
              <v-icon>mdi-qrcode-scan</v-icon>
            </div>
            Informe os dados do beneficiário
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-container class="px-0 px-0">
                <v-row>

                  <!-- TIPO DE CHAVE -->
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-select
                      v-model="pix_key"
                      :items="$store.state.pix.pix_keys"
                      label="Escolha o tipo de chave"
                    ></v-select>
                  </v-col>

                  <!-- CHAVE PIX -->
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      disabled
                      v-if="!pix_key"
                      label=""
                    ></v-text-field>

                    <!-- Telefone -->
                    <v-text-field
                      type="number"
                      v-model="new_pix.key"
                      v-if="pix_key === 'Telefone'"
                      label="Digite o telefone"
                      placeholder="(##) #####-####"
                    ></v-text-field>

                    <!-- Email -->
                    <v-text-field
                      v-model="new_pix.key"
                      v-if="pix_key === 'E-mail'"
                      placeholder="Ex: user@mail.com"
                      label="Digite o e-mail"
                    ></v-text-field>

                    <!-- CPF -->
                    <v-text-field
                      type="number"
                      v-model="new_pix.key"
                      v-if="pix_key === 'CPF'"
                      placeholder="###.###.###-##"
                      label="Digite o CPF"
                    ></v-text-field>

                    <!-- CNPJ -->
                    <v-text-field
                      type="number"
                      v-model="new_pix.key"
                      v-if="pix_key === 'CNPJ'"
                      placeholder="###.###.###/####-###"
                      label="Digite o CNPJ"
                    ></v-text-field>

                    <!-- Outro -->
                    <v-text-field
                      v-model="new_pix.key"
                      v-if="pix_key === 'Outro'"
                      placeholder="Ex: CHAVE-PIX-AUFANUMERICA"
                      label="Digite a chave aleatória"
                    ></v-text-field>
                  </v-col>

                  <!-- NOME DO BENEFICIÁRIO -->
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      v-model="new_pix.name"
                      :disabled="!pix_key"
                      placeholder="Nome completo ou Razão social"
                      label="Nome do Beneficiário"
                      required
                    ></v-text-field>
                  </v-col>

                  <!-- CIDADE DO BENEFICIÁRIO -->
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      :disabled="!pix_key"
                      v-model="new_pix.city"
                      placeholder="Ex: São Paulo"
                      label="Cidade do beneficiário"
                      required
                    ></v-text-field>
                  </v-col>

                  <!-- VALOR -->
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      v-model="new_pix.amount"
                      :disabled="!pix_key"
                      placeholder="Opcional..."
                      label="Valor"
                      required
                    ></v-text-field>
                  </v-col>

                  <!-- REF -->
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      v-model="new_pix.reference"
                      :disabled="!pix_key"
                      placeholder="Código da transferência - Sem espaço (Letras e/ou Números)..."
                      label="Referência"
                      required
                    ></v-text-field>
                  </v-col>

                  <!-- BUTTON -->
                  <v-col
                    cols="12"
                    md="12"
                  >
                    <v-btn @click="generateValid() ? generatePix() : ''"
                           :disable="!generateValid()"
                           :style="generateValid() ? 'cursor: pointer;' : 'cursor: not-allowed;'"
                           :color="generateValid() ? 'primary' : 'grey'" block>
                      {{ generateValid() ? 'Gerar QR Code!' : 'Preencha os campos' }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-text v-if="error">
            {{ error }}
          </v-card-text>
        </v-card>
        <v-card v-if="step === 2" outlined style="border-radius: 10px;" class="pa-4">
          <v-card-title class="flex-fill">
            <div class="mr-3">
              <v-icon>mdi-qrcode-scan</v-icon>
            </div>
            Baixe ou escaneie o seu QR-Code!
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-container class="px-0 px-0">
                <v-row>

                  <!-- QR CODE -->
                  <v-col
                    cols="12"
                    md="12"
                    class="d-flex justify-center"
                  >
                    <div>
                      <v-img width="300" height="300" :src="this.$store.state.pix.data.qrcode_base64"></v-img>
                    </div>
                  </v-col>

                  <!-- CHAVE PIX -->
                  <v-col
                    cols="12"
                    md="12"
                  >
                  </v-col>

                  <!-- BUTTONS -->
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-btn @click="clearData()"
                           :style="'cursor: pointer;'"
                           :color="'grey'" block>
                      Gerar outro QR-Code
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <a download="qr-code.png" :href="$store.state.pix.data.qrcode_base64" target="_blank">
                      <v-btn @click="''"
                             :style="'cursor: pointer;'"
                             :color="'primary'" block>
                        <v-icon class="mr-2">
                          mdi-download
                        </v-icon>
                        Baixar
                      </v-btn>
                    </a>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-text v-if="error">
            {{ error }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Code from "@/components/Code";

export default {
  name: 'Pix',
  components: {
    Code
  },
  data() {
    return {
      step: 1,
      error: "",
      pix_key: null,
      new_pix: {
        key_type: null, //'telefone', 'cnpj', 'cpf'
        key: null, // numero do telefone, cnpj ou cpj
        name: null, // nome do destinatário (recebedor)
        city: null, // cidade
        amount: null, // valor
        reference: null // comentário ou código
      },
    }
  },

  mounted() {
  },
  watch: {
    'pix.data': function () {
      if (this.$store.state.pix.data.qrcode_base64) {
        this.step = 2
      }
    }
  },
  methods: {
    generatePix() {
      let new_pix = null
      this.error = ""

      if (this.pix_key &&
        this.new_pix.name &&
        this.new_pix.city
      ) {
        new_pix = {
          key_type: this.pix_key ? this.pix_key.replace('-', '').toLowerCase() : null,
          key: this.pix_key ?? null,
          name: this.new_pix.name ?? null,
          city: this.new_pix.city ?? null,
          amount: (this.new_pix.amount ? `R$ ${this.new_pix.amount}` : null),
          reference: this.new_pix.reference ?? null
        }

        this.$store.dispatch('getPixQRCode', this.normalizeHelper(new_pix))

      }
    },
    generateValid() {
      if (this.pix_key && this.pix_key !== '' &&
        this.new_pix.name && this.new_pix.name !== '' &&
        this.new_pix.city && this.new_pix.city !== '') {
        return true
      } else {
        return false
      }
    },
    clearData() {
      this.step = 1
      this.error = ""
      this.pix_key = null
      this.new_pix = {
        key_type: null, //'telefone', 'cnpj', 'cpf'
        key: null, // numero do telefone, cnpj ou cpj
        name: null, // nome do destinatário (recebedor)
        city: null, // cidade
        amount: null, // valor
        reference: null // comentário ou código
      }
    }
  },

  head() {
    return {
      title: "PIX QR-Code Generator - Helper API",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Helper API with several FREE options: Geolocation by IP, Email Validator, Email List Validator, PIX QR-Code Generator, Horoscope and much more.'
        }
      ]
    }
  }
}
</script>
