import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b671a98625b00e",
    pass: "0d665c74977490"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({ subject, body }: SendMailData){
    await transport.sendMail({
      from: 'equipe Feedget <oi@feedget.com>',
      to: 'Guilherme Orcezi <guilhermeorcezi@gmail.com>',
      subject,
      html: body
    })
  }
}