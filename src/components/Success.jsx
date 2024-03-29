import React, { forwardRef } from "react";
import { createPortal } from "react-dom";

const Success = forwardRef(function ({ onClose }, ref) {
     return createPortal(
          <dialog ref={ref} className="cart modal">
               <h2>Success!</h2>
               <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam consequatur molestias assumenda harum consequuntur?
                    Voluptates laborum suscipit, asperiores iusto nesciunt
                    incidunt voluptate earum recusandae itaque? Similique
                    veritatis ipsam rem molestiae?
               </p>

               <div className="modal-actions ">
                    <button onClick={onClose} className="text-button button">
                         Okay
                    </button>
               </div>
          </dialog>,

          document.getElementById("modal")
     );
});

export default Success;
