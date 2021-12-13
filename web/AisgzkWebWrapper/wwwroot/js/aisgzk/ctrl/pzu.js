window.aisgzkV2Ctrl = window.aisgzkV2Ctrl || {};
const ctrl = window.aisgzkV2Ctrl.pzu = {};

ctrl.onload = () => {
    console.log('aisgzkV2Ctrl.onload');
    if (!$('#pzu_dolya').length)
        $(`<div class="pu-developer" style="" id="pzu_dolya">
            <div class="form-group">
                <label for="" class="col-form-label-ggg">Площадь доли(га):</label>
                <input type="number" id="pu_square_dolya" class="form-control shadow-none">
            </div>
        </div>`).insertBefore($('.region-tree-container form button.btn-enter-coordinates').parent());
}