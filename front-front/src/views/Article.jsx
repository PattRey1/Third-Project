import React, { useState } from "react";
import { createComment } from "../services/comments";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useInputs";

const Article = () => {
  const [form, handleInputs] = useForm();
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    createComment(form)
      .then(res => {
        push("/articulo");
        console.log("esto es la res", res);
      })
      .catch(err => console.log("este es el error", err));
  };
  return (
    <div>
      <div className="uk-container">
        <section className="uk-section uk-section-small">
          <div className="uk-container">
            <h1 className="uk-heading-divider">¿Cuándo debo ir al doctor?</h1>
            <div>
              <p className="uk-article-meta uk-width-1-2">Written by: </p>
            </div>
            <div className="uk-flex uk-margin-bottom ">
              <div className="uk-width-1-2">
                <span className="uk-label uk-label-danger tag uk-margin-right">
                  Salud
                </span>
                <span className="uk-label uk-label-danger tag uk-margin-right">
                  Ciencia
                </span>
                <span className="uk-label uk-label-danger tag uk-margin-right">
                  Cuidado personal
                </span>
              </div>
            </div>
            <div>
              <img
                className="img-art"
                data-srcSet="https://www.talktabu.com/wp-content/uploads/2018/04/checkup.png"
                alt=""
                data-uk-img
              />
            </div>
            <section className="uk-section">
              <article className="uk-article uk-text-lead uk-text-justify">
                Es posible que tenga un retraso para un chequeo. Si no es un
                bebé (felicidades si lo es y puede leer esto), entonces solo
                necesita ir a su médico de atención primaria (PCP) para un
                chequeo una vez al año. No todos hacen esto, ¡pero tú deberías!
                Parte del problema es que alguien esperará hasta que se enferme
                para ir al médico. Luego piensan: "Oh, no necesito regresar para
                un chequeo porque si algo estaba mal, mi médico hubiera dicho
                algo". Sin embargo, ese no es siempre el caso. Si bien la
                mayoría de los médicos se preocupan enormemente por sus
                pacientes, usted incluyó, están sobrecargados de papeleo,
                horarios ocupados y muchas otras barreras para una atención
                óptima. Por lo general, los médicos, por desgracia, solo pueden
                centrarse en por qué un paciente vino a la consulta para esa
                visita.
              </article>
              <article className="uk-article uk-text-lead uk-text-justify">
                El chequeo anual es una gran oportunidad para atrapar cosas
                antes de que se conviertan en problemas. Por ejemplo, controlar
                la presión arterial es importante porque se conoce como el
                "asesino silencioso". Las personas con presión arterial alta no
                sienten ningún síntoma, pero pueden dañar gravemente los órganos
                internos. Los médicos de atención primaria ayudan a evitar que
                sucedan cosas malas. También son una buena persona central para
                coordinar la atención médica. Los proveedores de atención médica
                no hablan todo el tiempo, por lo que pueden perderse cosas (dos
                médicos le recetan el mismo tipo de medicamento, etc.). Su PCP
                es el único proveedor que debe conectar las piezas y administrar
                toda su atención. Algunas aseguradoras ni siquiera le permiten
                ver a un especialista sin una referencia, que es donde también
                entra un PCP. Además, generalmente puede establecer una relación
                sólida con su PCP porque lo conocen con el tiempo, y eso será
                muy útil a medida que trabajen juntos en sus objetivos de salud.
                Algunas mujeres tienen una razón adicional por la cual no van a
                su PCP para un chequeo anual (y algunas ni siquiera tienen un
                PCP). Van al ginecólogo (GYN) todos los años, ¡lo cual es
                genial! ¡Sigue haciéndolo! Pero asegúrese de tenerlo y acuda a
                un PCP también. Los ginecólogos brindan atención médica
                reproductiva espectacular, pero generalmente no tienen tiempo
                para concentrarse en todo el cuerpo. Entonces, si bien su salud
                reproductiva depende del tabaco, es posible que le falte algo
                relacionado con su corazón, estómago, muñeca o cualquier otra
                parte de su cuerpo. Sí, es molesto tener que ir a tantas citas
                médicas cada año, pero si no tenemos nuestra salud, ¿qué
                tenemos?
              </article>
              <article className="uk-article uk-text-lead uk-text-justify">
                El costo y el acceso a la atención son barreras con más
                frecuencia de lo que deberían ser. La buena noticia es que,
                según la Ley de Protección del Paciente y Cuidado de Salud
                Asequible (con cariño llamado Obamacare por algunos y con
                resentimiento llamado Obamacare por otros), los pacientes
                obtuvieron un poco de protección adicional. Se crearon subsidios
                para que las personas compraran seguro de salud, y algunos
                estados ampliaron Medicaid para cubrir a más personas. Entonces,
                más personas tienen seguro. Además de eso, muchos servicios
                preventivos deben estar cubiertos por todos los planes de
                seguro. Algunos planes todavía vienen con un copago, pero
                generalmente es una cantidad bastante razonable. Si le preocupan
                los costos, llame a la oficina y pregunte. Puede que tenga que
                hacer algunas compras, ¡pero vale la pena no romper el banco!
                Hay tantos tipos diferentes de proveedores de atención médica y,
                dependiendo del área en la que viva, generalmente hay muchos del
                mismo tipo de proveedor, por lo que debería poder encontrar
                todos los proveedores que necesita, e incluso debería estar
                capaz de ir a uno que te guste! Gráfico simple que resume los
                proveedores de atención médica que debe ver: Esto podría cambiar
                en función de las condiciones individuales, pero estos son los
                mínimos ¿Necesita ayuda para encontrar asistencia médica
                afirmativa? ¡Mira nuestro servicio de búsqueda de médicos!
              </article>
            </section>
            <hr />
            <section className="uk-section">
              <h2>Déjanos tu comentario</h2>
              <form className="uk-form-stacked" onSubmit={handleSubmit}>
                <textarea
                  className="uk-textarea"
                  rows="5"
                  onChange={handleInputs}
                ></textarea>

                <button
                  className="uk-button uk-button-primary regular-btn uk-margin-top uk-align-right@m uk-margin-remove-adjacent"
                  type="submit"
                >
                  Enviar comentario >>
                </button>
              </form>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Article;
