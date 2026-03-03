import { useRef } from "react";
import "./usereftask1.css";


const UseRefHooktask1 = () => {

    const themeRef = useRef()

    const changeTheme = () => {
        //    console.log( themeRef.current.classList.value);
        // themeRef.current.classList.toggle("dark")

        const element = themeRef.current;

        if (element.classList.contains("dark")) {
            element.classList.remove("dark");
            element.classList.add("light");
        }
        else {
            element.classList.remove("light");
            element.classList.add("dark");
        }

    }

    return (
        <div className="homepage" ref={themeRef}>
            <button onClick={changeTheme}>Theme</button>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam minus rerum soluta pariatur qui provident impedit tenetur fuga eligendi, temporibus voluptatem veniam quos eaque sunt saepe praesentium laborum. Expedita!
                Vitae sunt, atque recusandae hic, beatae earum aspernatur ullam reprehenderit aliquid animi expedita, laudantium cum vel enim soluta sed perspiciatis saepe quod consequatur natus officia molestias quo! Ducimus, voluptatibus veritatis?
                Est voluptatum ad necessitatibus corrupti optio ipsa assumenda odit aliquam! A laboriosam unde doloremque incidunt impedit minus dolorum natus, neque deleniti exercitationem accusamus nisi molestiae voluptatem libero corrupti corporis saepe!
                Mollitia, animi quidem, debitis molestias, recusandae possimus molestiae eveniet saepe omnis alias unde iure veritatis. Blanditiis inventore cum numquam officiis quaerat minima optio, aliquam rerum magni delectus. Totam, et molestias.
                Eveniet mollitia dolores iure possimus assumenda delectus a voluptates aut tenetur officia sapiente, magnam dolore nulla est perferendis nobis illum, ipsa veniam veritatis nam, adipisci sint cum! Molestias, voluptatum aspernatur!
                Debitis sunt ea molestias nesciunt sequi quos iste laudantium exercitationem enim, tenetur commodi neque, autem error nemo quisquam accusamus veniam aut accusantium. Quas quod sed aspernatur nisi, obcaecati quidem ex.
                Voluptates molestiae blanditiis nihil, doloremque numquam tenetur id suscipit, deserunt sed possimus aliquid cum ipsum voluptate aliquam non ad! Voluptatum, ullam fugit. Veniam, alias commodi. Rem, adipisci! Asperiores, labore. Voluptates?
                Expedita perspiciatis, cumque commodi harum nihil itaque dolorum dignissimos saepe quos in? Eius blanditiis a debitis commodi alias eaque sequi, cupiditate possimus eum, minus maiores explicabo vero, nihil incidunt ipsa.
                Sunt earum nam autem! Corrupti eius voluptate voluptas qui provident obcaecati sint, maiores similique iste excepturi, deserunt optio natus aperiam velit dolor adipisci molestiae quia neque ipsa culpa? Voluptas, ipsam.
                Pariatur animi cum accusantium officiis perspiciatis esse dolorem iure ullam quia fugiat, deserunt laboriosam nostrum voluptatibus ea repellendus. Labore inventore maxime modi commodi tempora quis temporibus reprehenderit nemo iure amet.</p>
        </div>
    )
}


export default UseRefHooktask1