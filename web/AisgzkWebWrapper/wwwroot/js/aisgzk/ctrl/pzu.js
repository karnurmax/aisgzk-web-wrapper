window.aisgzkV2Ctrl = window.aisgzkV2Ctrl || {};
const ctrl = window.aisgzkV2Ctrl.pzu = {};

ctrl.onload = () => {
    console.log('aisgzkV2Ctrl.onload');
    $('.region-tree-container form').append(
        `<div class="pu-developer" style="">
            <div class="form-group">
                <label for="" class="col-form-label-ggg">Площадь (га):</label>
                <input type="number" id="pu_square" class="form-control shadow-none">
            </div>
        </div>`
    );
}